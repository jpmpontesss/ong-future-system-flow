
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: 'green' | 'blue' | 'orange' | 'purple';
  change?: string;
  trend?: 'up' | 'down';
}

const StatCard = ({ title, value, icon: Icon, color, change, trend }: StatCardProps) => {
  const colorClasses = {
    green: 'from-green-500 to-green-600 text-green-600 bg-green-50',
    blue: 'from-blue-500 to-blue-600 text-blue-600 bg-blue-50',
    orange: 'from-orange-500 to-orange-600 text-orange-600 bg-orange-50',
    purple: 'from-purple-500 to-purple-600 text-purple-600 bg-purple-50'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow duration-300 p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm mt-2 ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {change}
            </p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClasses[color].split(' ')[0]} ${colorClasses[color].split(' ')[1]} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
