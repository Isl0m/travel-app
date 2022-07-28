import Profile from '@/components/screens/profile/Profile'
import { NextPageAuth } from '@/types/auth'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
