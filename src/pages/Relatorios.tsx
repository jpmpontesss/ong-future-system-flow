
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Download, FileText, TrendingUp, Calendar, Users, DollarSign } from 'lucide-react';

const Relatorios = () => {
  // Dados mockados para os gráficos
  const beneficiariosData = [
    { mes: 'Jan', total: 180, novos: 15 },
    { mes: 'Fev', total: 195, novos: 20 },
    { mes: 'Mar', total: 210, novos: 18 },
    { mes: 'Abr', total: 230, novos: 25 },
    { mes: 'Mai', total: 247, novos: 22 },
  ];

  const voluntariosData = [
    { area: 'Educação', quantidade: 25 },
    { area: 'Saúde', quantidade: 18 },
    { area: 'Assistência Social', quantidade: 22 },
    { area: 'Eventos', quantidade: 15 },
    { area: 'Administrativa', quantidade: 9 },
  ];

  const doacoesData = [
    { mes: 'Jan', valor: 12500 },
    { mes: 'Fev', valor: 14200 },
    { mes: 'Mar', valor: 13800 },
    { mes: 'Abr', valor: 16100 },
    { mes: 'Mai', valor: 15420 },
  ];

  const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'];

  const relatoriosDisponiveis = [
    {
      titulo: 'Relatório de Beneficiários',
      descricao: 'Lista completa de beneficiários ativos e histórico',
      tipo: 'beneficiarios',
      icon: Users,
      formato: 'PDF/Excel'
    },
    {
      titulo: 'Relatório de Voluntários',
      descricao: 'Cadastro de voluntários por área de atuação',
      tipo: 'voluntarios',
      icon: Users,
      formato: 'PDF/Excel'
    },
    {
      titulo: 'Relatório Financeiro',
      descricao: 'Doações recebidas e gastos do período',
      tipo: 'financeiro',
      icon: DollarSign,
      formato: 'PDF/Excel'
    },
    {
      titulo: 'Relatório de Atividades',
      descricao: 'Eventos realizados e participação',
      tipo: 'atividades',
      icon: Calendar,
      formato: 'PDF'
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="Relatórios e Análises"
        description="Visualize dados e gere relatórios da ONG"
      />

      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Beneficiários</p>
              <p className="text-3xl font-bold text-green-600">247</p>
              <p className="text-sm text-green-600 mt-1">+8.9% vs mês anterior</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Voluntários Ativos</p>
              <p className="text-3xl font-bold text-blue-600">89</p>
              <p className="text-sm text-blue-600 mt-1">+5.6% vs mês anterior</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Doações (Mês)</p>
              <p className="text-3xl font-bold text-orange-600">R$ 15.420</p>
              <p className="text-sm text-orange-600 mt-1">-4.2% vs mês anterior</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Eventos Realizados</p>
              <p className="text-3xl font-bold text-purple-600">12</p>
              <p className="text-sm text-purple-600 mt-1">+20% vs mês anterior</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Gráfico de Beneficiários */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Evolução de Beneficiários</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={beneficiariosData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Voluntários por Área */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Voluntários por Área</h3>
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={voluntariosData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="quantidade"
                label={({ area, quantidade }) => `${area}: ${quantidade}`}
              >
                {voluntariosData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Doações */}
        <div className="bg-white rounded-lg shadow-sm border p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Evolução das Doações</h3>
            <DollarSign className="w-5 h-5 text-orange-600" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={doacoesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip formatter={(value) => [`R$ ${value}`, 'Valor']} />
              <Line 
                type="monotone" 
                dataKey="valor" 
                stroke="#F59E0B" 
                strokeWidth={3}
                dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Relatórios para Download */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Relatórios Disponíveis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatoriosDisponiveis.map((relatorio, index) => {
            const Icon = relatorio.icon;
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">{relatorio.titulo}</h4>
                      <p className="text-sm text-gray-600 mt-1">{relatorio.descricao}</p>
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mt-2">
                        {relatorio.formato}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <button className="flex items-center px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </button>
                  {relatorio.formato.includes('Excel') && (
                    <button className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Excel
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Relatorios;
