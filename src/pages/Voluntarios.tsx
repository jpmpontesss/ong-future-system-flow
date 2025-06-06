
import { useState } from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Heart, Plus, Search, Filter, Edit, Trash2, Eye, MapPin, Mail, Phone } from 'lucide-react';

interface Voluntario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  area: string;
  disponibilidade: string;
  status: 'ativo' | 'inativo' | 'pendente';
  dataCadastro: string;
}

const Voluntarios = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('todas');

  // Dados mockados
  const [voluntarios] = useState<Voluntario[]>([
    {
      id: 1,
      nome: 'Carlos Eduardo Silva',
      email: 'carlos@email.com',
      telefone: '(11) 99999-9999',
      endereco: 'São Paulo, SP',
      area: 'Educação',
      disponibilidade: 'Fins de semana',
      status: 'ativo',
      dataCadastro: '2024-01-10'
    },
    {
      id: 2,
      nome: 'Fernanda Lima Santos',
      email: 'fernanda@email.com',
      telefone: '(11) 88888-8888',
      endereco: 'São Paulo, SP',
      area: 'Saúde',
      disponibilidade: 'Tardes',
      status: 'ativo',
      dataCadastro: '2024-02-05'
    },
    {
      id: 3,
      nome: 'Roberto Almeida',
      email: 'roberto@email.com',
      telefone: '(11) 77777-7777',
      endereco: 'São Paulo, SP',
      area: 'Assistência Social',
      disponibilidade: 'Manhãs',
      status: 'pendente',
      dataCadastro: '2024-02-20'
    }
  ]);

  const areas = ['Educação', 'Saúde', 'Assistência Social', 'Eventos', 'Administrativa'];

  const filteredVoluntarios = voluntarios.filter(voluntario => {
    const matchesSearch = voluntario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         voluntario.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterArea === 'todas' || voluntario.area === filterArea;
    return matchesSearch && matchesFilter;
  });

  return (
    <Layout>
      <PageHeader
        title="Gestão de Voluntários"
        description="Cadastre e gerencie voluntários da ONG"
      >
        <button
          onClick={() => setShowForm(true)}
          className="btn-primary flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Novo Voluntário
        </button>
      </PageHeader>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total</p>
              <p className="text-2xl font-bold text-gray-900">{voluntarios.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Ativos</p>
              <p className="text-2xl font-bold text-gray-900">
                {voluntarios.filter(v => v.status === 'ativo').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pendentes</p>
              <p className="text-2xl font-bold text-gray-900">
                {voluntarios.filter(v => v.status === 'pendente').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Novos (mês)</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros e busca */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nome ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterArea}
              onChange={(e) => setFilterArea(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="todas">Todas as áreas</option>
              {areas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Cards de voluntários */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVoluntarios.map((voluntario) => (
          <div key={voluntario.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {voluntario.nome}
                    </h3>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      voluntario.status === 'ativo'
                        ? 'bg-green-100 text-green-800'
                        : voluntario.status === 'pendente'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {voluntario.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  {voluntario.email}
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  {voluntario.telefone}
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {voluntario.endereco}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Área: {voluntario.area}</p>
                    <p className="text-gray-600">{voluntario.disponibilidade}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end space-x-2">
                <button className="text-blue-600 hover:text-blue-900 p-2 rounded-lg hover:bg-blue-50">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="text-green-600 hover:text-green-900 p-2 rounded-lg hover:bg-green-50">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de cadastro */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-screen overflow-y-auto">
            <h3 className="text-xl font-semibold mb-6">Cadastro de Voluntário</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Endereço"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Área de interesse</option>
                  {areas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Disponibilidade</option>
                  <option value="Manhãs">Manhãs</option>
                  <option value="Tardes">Tardes</option>
                  <option value="Noites">Noites</option>
                  <option value="Fins de semana">Fins de semana</option>
                  <option value="Flexível">Flexível</option>
                </select>
              </div>
              
              <textarea
                placeholder="Experiência e motivação (opcional)"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Cadastrar Voluntário
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Voluntarios;
