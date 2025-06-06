
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Settings, Users, Shield, Database, Bell, FileText, Trash2, Edit } from 'lucide-react';
import { useState } from 'react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('usuarios');

  const tabs = [
    { id: 'usuarios', label: 'Usuários', icon: Users },
    { id: 'permissoes', label: 'Permissões', icon: Shield },
    { id: 'sistema', label: 'Sistema', icon: Settings },
    { id: 'backup', label: 'Backup', icon: Database },
  ];

  // Dados mockados
  const usuarios = [
    { id: 1, nome: 'João Admin', email: 'joao@ong.com', perfil: 'Administrador', status: 'ativo', ultimoAcesso: '2024-06-06 14:30' },
    { id: 2, nome: 'Maria Coordenadora', email: 'maria@ong.com', perfil: 'Coordenador', status: 'ativo', ultimoAcesso: '2024-06-06 09:15' },
    { id: 3, nome: 'Carlos Voluntário', email: 'carlos@ong.com', perfil: 'Voluntário', status: 'inativo', ultimoAcesso: '2024-06-05 16:45' },
  ];

  return (
    <Layout>
      <PageHeader
        title="Painel Administrativo"
        description="Gerencie configurações do sistema e usuários"
      />

      {/* Abas de navegação */}
      <div className="bg-white rounded-lg shadow-sm border mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {/* Tab Usuários */}
          {activeTab === 'usuarios' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Gestão de Usuários</h3>
                <button className="btn-primary flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Novo Usuário
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Usuário
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Perfil
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Último Acesso
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {usuarios.map((usuario) => (
                      <tr key={usuario.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{usuario.nome}</div>
                            <div className="text-sm text-gray-500">{usuario.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            usuario.perfil === 'Administrador'
                              ? 'bg-red-100 text-red-800'
                              : usuario.perfil === 'Coordenador'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {usuario.perfil}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            usuario.status === 'ativo'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {usuario.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {usuario.ultimoAcesso}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900 p-1 rounded">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab Permissões */}
          {activeTab === 'permissoes' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Controle de Permissões</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Administrador</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Acesso total ao sistema</li>
                    <li>✓ Gerenciar usuários</li>
                    <li>✓ Configurações do sistema</li>
                    <li>✓ Backup e restauração</li>
                    <li>✓ Todos os relatórios</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Coordenador</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Gerenciar beneficiários</li>
                    <li>✓ Gerenciar voluntários</li>
                    <li>✓ Gerar relatórios</li>
                    <li>✓ Ver dashboard</li>
                    <li>✗ Configurações do sistema</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Voluntário</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Ver dashboard</li>
                    <li>✓ Ver beneficiários</li>
                    <li>✗ Editar dados</li>
                    <li>✗ Gerar relatórios</li>
                    <li>✗ Configurações</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab Sistema */}
          {activeTab === 'sistema' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Configurações do Sistema</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Settings className="w-6 h-6 text-gray-600 mr-3" />
                    <h4 className="font-medium text-gray-900">Configurações Gerais</h4>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nome da Organização
                      </label>
                      <input
                        type="text"
                        value="João Pedro Pontes & Guilherme Vinhas"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email de Contato
                      </label>
                      <input
                        type="email"
                        value="contato@ong.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Bell className="w-6 h-6 text-gray-600 mr-3" />
                    <h4 className="font-medium text-gray-900">Notificações</h4>
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="ml-2 text-sm text-gray-700">Notificar novos cadastros</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Relatórios mensais automáticos</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="ml-2 text-sm text-gray-700">Alertas de sistema</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Backup */}
          {activeTab === 'backup' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Backup e Restauração</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Database className="w-6 h-6 text-green-600 mr-3" />
                    <h4 className="font-medium text-gray-900">Backup Automático</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Último backup: 06/06/2024 às 03:00
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Frequência
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>Diário</option>
                        <option>Semanal</option>
                        <option>Mensal</option>
                      </select>
                    </div>
                    <button className="w-full btn-primary">
                      Configurar Backup Automático
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="w-6 h-6 text-blue-600 mr-3" />
                    <h4 className="font-medium text-gray-900">Backup Manual</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Faça um backup completo dos dados do sistema
                  </p>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Gerar Backup Agora
                    </button>
                    <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Restaurar do Backup
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Bell className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      Importante
                    </h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        Certifique-se de manter backups regulares dos dados. 
                        Em caso de problemas, entre em contato com o suporte técnico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
