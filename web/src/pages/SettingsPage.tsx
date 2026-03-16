import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

interface SettingItem {
  id: string
  title: string
  description?: string
  value?: string | boolean
  icon: string
  action?: 'toggle' | 'navigate'
}

export default function SettingsPage() {
  const accountSettings: SettingItem[] = [
    { id: '1', title: 'Full Name', value: 'John Doe', icon: '👤', action: 'navigate' },
    { id: '2', title: 'Email', value: 'john@example.com', icon: '✉️', action: 'navigate' },
    { id: '3', title: 'Phone Number', value: '+1 (555) 123-4567', icon: '📱', action: 'navigate' },
    { id: '4', title: 'KYC Status', value: 'Verified', icon: '✓', action: 'navigate' },
  ]

  const securitySettings: SettingItem[] = [
    { id: '5', title: '2-Factor Authentication', value: true, icon: '🔐', action: 'toggle' },
    { id: '6', title: 'Biometric Authentication', value: false, icon: '🔑', action: 'toggle' },
    { id: '7', title: 'Login Alerts', value: true, icon: '🔔', action: 'toggle' },
    { id: '8', title: 'Change Password', icon: '🔒', action: 'navigate' },
  ]

  const appSettings: SettingItem[] = [
    { id: '9', title: 'Currency', value: 'USD', icon: '💵', action: 'navigate' },
    { id: '10', title: 'Language', value: 'English', icon: '🌐', action: 'navigate' },
    { id: '11', title: 'App Notifications', value: true, icon: '🔔', action: 'toggle' },
    { id: '12', title: 'Dark Mode', value: true, icon: '🌙', action: 'toggle' },
  ]

  return (
    <div className="flex flex-col h-screen bg-primary pb-20">
      <Header showBack />

      <div className="flex-1 overflow-y-auto">
        {/* Profile Section */}
        <div className="px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-2xl">
              👤
            </div>
            <div>
              <p className="text-white font-semibold text-lg">John Doe</p>
              <p className="text-gray-400 text-sm">john@example.com</p>
              <p className="text-cyan-400 text-xs mt-1">Gold Member</p>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="px-4 py-4">
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">Account</h3>
          <div className="space-y-3">
            {accountSettings.map((setting) => (
              <button
                key={setting.id}
                className="w-full bg-secondary hover:bg-opacity-80 rounded-lg p-4 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{setting.icon}</span>
                  <div className="text-left">
                    <p className="text-white font-medium text-sm">{setting.title}</p>
                    {setting.value && typeof setting.value === 'string' && (
                      <p className="text-gray-400 text-xs">{setting.value}</p>
                    )}
                  </div>
                </div>
                <span className="text-gray-400 text-lg">›</span>
              </button>
            ))}
          </div>
        </div>

        {/* Security Settings */}
        <div className="px-4 py-4">
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">Security</h3>
          <div className="space-y-3">
            {securitySettings.map((setting) => (
              <div
                key={setting.id}
                className="bg-secondary hover:bg-opacity-80 rounded-lg p-4 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{setting.icon}</span>
                  <p className="text-white font-medium text-sm">{setting.title}</p>
                </div>
                {setting.action === 'toggle' ? (
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={setting.value as boolean}
                      className="sr-only"
                    />
                    <div className={`w-10 h-6 rounded-full transition-colors ${(setting.value as boolean) ? 'bg-cyan-500' : 'bg-gray-600'}`} />
                    <div className={`absolute w-4 h-4 bg-white rounded-full transition-transform ${(setting.value as boolean) ? 'translate-x-5' : 'translate-x-1'}`} />
                  </div>
                ) : (
                  <span className="text-gray-400 text-lg">›</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* App Settings */}
        <div className="px-4 py-4">
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">App</h3>
          <div className="space-y-3">
            {appSettings.map((setting) => (
              <div
                key={setting.id}
                className="bg-secondary hover:bg-opacity-80 rounded-lg p-4 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{setting.icon}</span>
                  <div className="text-left">
                    <p className="text-white font-medium text-sm">{setting.title}</p>
                    {setting.value && typeof setting.value === 'string' && (
                      <p className="text-gray-400 text-xs">{setting.value}</p>
                    )}
                  </div>
                </div>
                {setting.action === 'toggle' ? (
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={setting.value as boolean}
                      className="sr-only"
                    />
                    <div className={`w-10 h-6 rounded-full transition-colors ${(setting.value as boolean) ? 'bg-cyan-500' : 'bg-gray-600'}`} />
                    <div className={`absolute w-4 h-4 bg-white rounded-full transition-transform ${(setting.value as boolean) ? 'translate-x-5' : 'translate-x-1'}`} />
                  </div>
                ) : (
                  <span className="text-gray-400 text-lg">›</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="px-4 py-6">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
            Log Out
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
