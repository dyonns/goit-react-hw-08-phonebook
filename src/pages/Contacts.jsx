import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { selectLoading } from 'redux/Contacts/selectors';
import { getContacts } from 'redux/Contacts/contactsOperayion';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={'s.container'}>
      <ContactForm />
      <div>
        {isLoading ? <ThreeDots /> : <h2 className={'s.title'}>Contacts</h2>}
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
