import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { supabase } from '@/integrations/supabase/client';
import { Image, Star, Briefcase, Users } from 'lucide-react';

interface Stats {
  portfolioCount: number;
  testimonialsCount: number;
  servicesCount: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({
    portfolioCount: 0,
    testimonialsCount: 0,
    servicesCount: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const [portfolio, testimonials, services] = await Promise.all([
        supabase.from('portfolio_items').select('id', { count: 'exact', head: true }),
        supabase.from('testimonials').select('id', { count: 'exact', head: true }),
        supabase.from('services').select('id', { count: 'exact', head: true }),
      ]);

      setStats({
        portfolioCount: portfolio.count || 0,
        testimonialsCount: testimonials.count || 0,
        servicesCount: services.count || 0,
      });
      setLoading(false);
    };

    fetchStats();
  }, []);

  const statCards = [
    { title: 'Portfolio Items', value: stats.portfolioCount, icon: Image, color: 'text-blue-500' },
    { title: 'Testimonials', value: stats.testimonialsCount, icon: Star, color: 'text-yellow-500' },
    { title: 'Services', value: stats.servicesCount, icon: Briefcase, color: 'text-green-500' },
  ];

  return (
    <AdminLayout>
      <Helmet>
        <title>Dashboard | VE Admin</title>
      </Helmet>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Dashboard</h2>
          <p className="text-muted-foreground">Overview of your website content</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {statCards.map((stat) => (
            <Card key={stat.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {loading ? '...' : stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Use the sidebar to manage your portfolio, testimonials, and services. 
              Only admin users can create, edit, or delete content.
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
