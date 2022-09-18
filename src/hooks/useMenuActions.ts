import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectMyProfile} from 'redux/profile';
import {useAppDispatch} from 'redux/store';
import User, {selectCurrentUser} from 'redux/user';

const useMenuActions = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const myProfile = useSelector(selectMyProfile);
  const profileAction = () =>
    navigation.navigate('profile', {currentUser: currentUser, myProfile});
  const chatAction = () => navigation.navigate('chat');
  const faqsAction = () => navigation.navigate('faqs');
  const usernameAction = () => {};
  const logoutAction = () => dispatch(User.logout());
  return {
    usernameAction,
    usernameTitle: currentUser?.user_name,
    profileAction,
    profileTitle: 'Profile',
    chatAction,
    chatTitle: 'Chat',
    faqsAction,
    faqsTitle: 'FAQs',
    logoutAction,
    logoutTitle: 'Log Out',
  };
};

export default useMenuActions;
