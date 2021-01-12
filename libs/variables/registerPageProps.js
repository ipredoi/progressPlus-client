import { rolesArr, cohortArr } from '../globalVariables/registerUserArrays';
import styles from '../../pages/register/register.module.css';

const rolesDropdownProps = {
  option: rolesArr,
  name: 'role',
  className: styles.dropdownMenu,
  placeholder: 'Select SoC Role',
};

const cohortDropdownProps = {
  className: styles.dropdownMenu,
  option: cohortArr,
  name: 'cohort',
  placeholder: 'Select Current Cohort',
};

const forenameFieldProps = {
  placeholder: 'Forename',
  name: 'forename',
  className: styles.inputField,
};

const surnameFieldProps = {
  placeholder: 'Surname',
  name: 'surname',
  className: styles.inputField,
};

const submitButtonProps = {
  className: styles.registerButton,
  buttonText: `Submit`,
};

const logOutButtonProps = {
  className: styles.signOutButton,
  buttonText: `Log Out`,
  color: 'red',
};

export {
  rolesDropdownProps,
  forenameFieldProps,
  cohortDropdownProps,
  surnameFieldProps,
  submitButtonProps,
  logOutButtonProps,
};
