
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import { Users, Heart, DollarSign, Calendar, TrendingUp, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header com boas-vindas */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">
              Bem-vindo ao Sistema da ONG
            </h1>
            <h2 className="text-2xl font-light mb-4">
              João Pedro Pontes & Guilherme Vinhas
            </h2>
            <p className="text-xl opacity-90 mb-6">
              Transformando vidas através da solidariedade e do trabalho voluntário. 
              Gerencie beneficiários, voluntários e projetos de forma simples e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/beneficiarios"
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
              >
                Gerenciar Beneficiários
              </Link>
              <Link
                to="/voluntarios"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-700 transition-colors text-center"
              >
                Cadastrar Voluntário
              </Link>
            </div>
          </div>
        </div>

        {/* Estatísticas principais */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Visão Geral</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Beneficiários Ativos"
              value={247}
              icon={Users}
              color="green"
              change="+12 este mês"
              trend="up"
            />
            <StatCard
              title="Voluntários"
              value={89}
              icon={Heart}
              color="blue"
              change="+5 novos"
              trend="up"
            />
            <StatCard
              title="Doações (mês)"
              value="R$ 15.420"
              icon={DollarSign}
              color="orange"
              change="+8.2%"
              trend="up"
            />
            <StatCard
              title="Eventos Realizados"
              value={12}
              icon={Calendar}
              color="purple"
              change="3 este mês"
              trend="up"
            />
          </div>
        </div>

        {/* Ações rápidas */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ações Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold ml-3">Novo Beneficiário</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Cadastre um novo beneficiário no sistema
              </p>
              <Link
                to="/beneficiarios"
                className="text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Cadastrar →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold ml-3">Novo Voluntário</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Registre um novo voluntário interessado
              </p>
              <Link
                to="/voluntarios"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Cadastrar →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold ml-3">Relatórios</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Visualize relatórios e análises
              </p>
              <Link
                to="/relatorios"
                className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
              >
                Ver Relatórios →
              </Link>
            </div>
          </div>
        </div>

        {/* Atividades recentes */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Atividades Recentes</h2>
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">Maria Silva</span> foi cadastrada como nova beneficiária
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Há 2 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">João Santos</span> se inscreveu como voluntário
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Há 4 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      Nova doação de <span className="font-medium">R$ 500,00</span> foi registrada
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Há 6 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      Relatório mensal foi gerado e enviado
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Ontem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
