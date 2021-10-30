const NotificationHelper = {
  sendNotification({ title, options }) {
    if (!this._checkAvailability()) {
      console.log('Notification Not Supported In This Browser')
      return
    }
    if (!this._checkPermission()) {
      console.log('User Menolak')
      this._requestPermission()
      return
    }
    this._showNotification({ title, options })
  },

  _checkAvailability() {
    return !!('Notification' in window)
  },

  _checkPermission() {
    return Notification.permission === 'granted'
  },

  async _requestPermission() {
    const status = await Notification.requestPermission()

    if (status === 'denied') {
      console.log('Notification Denied')
    }

    if (status === 'default') {
      console.log('Permission Closed')
    }
  },

  async _showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready
    serviceWorkerRegistration.showNotification(title, options)
  }
}

export default NotificationHelper