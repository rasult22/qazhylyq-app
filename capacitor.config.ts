import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.qazhylyq.app',
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
  },
  android: {
    includePlugins: [
      '@capacitor/device',
      'capacitor-plugin-safe-area',
      '@capacitnpxor/app',
      '@capacitor/assets',
      '@capacitor/core'
    ]
  }
}

export default config

// https://deendevelopers.notion.site/Central-Asia-Hajj-Umrah-Hackathon-22d1c4e0d9d64cd59c5e2a2ba6cab7ca
