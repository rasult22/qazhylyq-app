import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'qazhylyq.kz.app',
  appName: 'qazhylyq-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  ios: {
    includePlugins: [
      '@capacitor/device',
      'capacitor-plugin-safe-area',
      '@capacitor/app',
      '@capacitor/assets',
      '@capacitor/core'
    ]
  }
}

export default config
