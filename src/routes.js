import Home from './components/Home/Home.vue'
import Navbar1 from './components/Home/Navbar/Navbar.vue'
import Navbar2 from './components/PersonalSettings/Navbar/Navbar.vue'
import NewPage from './components/Home/NewPage.vue'
import Page from './components/Home/Page.vue'
import ProjectSettingsPage from './components/Home/Settings.vue'
import Members from './components/Home/ProjectSettings/Members.vue'
import Settings from './components/Home/ProjectSettings/Settings.vue'
import Theme from './components/Home/ProjectSettings/Theme.vue'
import Notifications from './components/Home/ProjectSettings/Notifications.vue'
import PageData from './components/Home/ProjectSettings/PageData.vue'
import PersonalSettingsPage from './components/PersonalSettings/Settings.vue'
import EditProfile from './components/PersonalSettings/Settings/EditProfile.vue'
import Extensions from './components/PersonalSettings/Settings/Extensions.vue'

export const routes = [
  {
    path: '', redirect: { name: 'home', params: { project: 'IgorAmidzic-1' } }, components: {
      'navbar': Navbar1,
      default: Home
    }, children: [
      { path: ':project', name: 'home', component: Home }
    ]
  },
  {
    path: '/:project/new', name: 'newPage', components: {
      'navbar': Navbar1,
      default: NewPage
    }
  },
  {
    path: '/settings', redirect: { name: 'settingsProfile' }, components: {
      'navbar': Navbar2,
      default: PersonalSettingsPage
    }, children: [
      { path: 'profile', name: 'settingsProfile', component: EditProfile },
      { path: 'extensions', name: 'settingsExtensions', component: Extensions }
    ]
  },
  {
    path: '/:project/settings', redirect: { name: 'settingsMembers' }, components: {
      'navbar': Navbar1,
      default: ProjectSettingsPage
    }, children: [
      { path: 'members', name: 'settingsMembers', component: Members },
      { path: 'basic', name: 'settingsBasic', component: Settings },
      { path: 'theme', name: 'settingsTheme', component: Theme },
      { path: 'notifications', name: 'settingsNotifications', component: Notifications },
      { path: 'page-data', name: 'settingsPageData', component: PageData }
    ]
  },
  {
    path: '/:page', name: 'page', components: {
      'navbar': Navbar1,
      default: Page
    }
  }
]
