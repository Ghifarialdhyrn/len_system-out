export type DashboardData = {
  total_peserta: number;
  peserta_aktif: number;
  alumni: number;
  belum_lengkap: number;
  application_trends: {
    month: string;
    total: number;
  }[];
  intern_distribution: {
    name: string;
    total: number;
    percentage: number;
  }[];
  recent_activity: {
    action: string;
    user: string;
    department: string;
    date: string;
    status: string;
  }[];
};

export type KpiCardItem = {
  icon: string;
  label: string;
  value: number;
  note: string;
  noteIcon: string;
  danger: boolean;
};