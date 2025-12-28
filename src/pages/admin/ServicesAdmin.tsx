import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  features: string[] | null;
  created_at: string;
}

const ServicesAdmin = () => {
  const [items, setItems] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    features: '',
  });
  const { toast } = useToast();
  const { isAdmin } = useAuth();

  const fetchItems = async () => {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setItems(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const resetForm = () => {
    setFormData({ title: '', description: '', icon: '', features: '' });
    setEditingItem(null);
  };

  const handleEdit = (item: Service) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description || '',
      icon: item.icon || '',
      features: item.features?.join('\n') || '',
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSave = {
      title: formData.title,
      description: formData.description || null,
      icon: formData.icon || null,
      features: formData.features ? formData.features.split('\n').filter(f => f.trim()) : null,
    };

    if (editingItem) {
      const { error } = await supabase
        .from('services')
        .update(dataToSave)
        .eq('id', editingItem.id);

      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
      } else {
        toast({ title: 'Success', description: 'Service updated' });
        fetchItems();
        setIsDialogOpen(false);
        resetForm();
      }
    } else {
      const { error } = await supabase.from('services').insert(dataToSave);

      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
      } else {
        toast({ title: 'Success', description: 'Service created' });
        fetchItems();
        setIsDialogOpen(false);
        resetForm();
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    const { error } = await supabase.from('services').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Service deleted' });
      fetchItems();
    }
  };

  return (
    <AdminLayout>
      <Helmet>
        <title>Services Management | VE Admin</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Services</h2>
            <p className="text-muted-foreground">Manage your service offerings</p>
          </div>
          {isAdmin && (
            <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) resetForm(); }}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Service
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>{editingItem ? 'Edit' : 'Add'} Service</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="icon">Icon (Lucide icon name)</Label>
                    <Input
                      id="icon"
                      value={formData.icon}
                      onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                      placeholder="e.g., Briefcase, Code, Palette"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="features">Features (one per line)</Label>
                    <Textarea
                      id="features"
                      value={formData.features}
                      onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                      placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {editingItem ? 'Update' : 'Create'}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Features</TableHead>
                  <TableHead>Created</TableHead>
                  {isAdmin && <TableHead className="text-right">Actions</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">Loading...</TableCell>
                  </TableRow>
                ) : items.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground">
                      No services yet
                    </TableCell>
                  </TableRow>
                ) : (
                  items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell className="max-w-xs truncate">{item.description || '-'}</TableCell>
                      <TableCell>{item.features?.length || 0} features</TableCell>
                      <TableCell>{new Date(item.created_at).toLocaleDateString()}</TableCell>
                      {isAdmin && (
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" onClick={() => handleEdit(item)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </TableCell>
                      )}
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default ServicesAdmin;
