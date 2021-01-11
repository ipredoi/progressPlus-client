import {
  rolesArr,
  cohortArr,
} from '../../libs/globalVariables/registerUserArrays';
import styles from './register.module.css';

const rolesDropdownProps = {
  option: rolesArr,
  className: styles.dropdownMenu,
  placeholder: 'Select SoC Role',
};

const cohortDropdownProps = {
  className: styles.dropdownMenu,
  option: cohortArr,
  placeholder: 'Select Current Cohort',
};

const nameFieldProps = { placeholder: 'Name', className: styles.inputField };

const submitButtonProps = {
  className: styles.registerButton,
  buttonText: `Submit the Form`,
};

const logOutButtonProps = {
  className: styles.signOutButton,
  buttonText: `Log Out`,
  color: 'red',
};

export {
  rolesDropdownProps,
  cohortDropdownProps,
  nameFieldProps,
  submitButtonProps,
  logOutButtonProps,
};
