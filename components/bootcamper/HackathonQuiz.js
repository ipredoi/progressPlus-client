import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import styles from '../../styles/componentStyle/hackathonQuiz.module.css';

export default function HackathonQuiz() {
  return (
    <div className={styles.questions}>
      <h3>How comfortable do you feel...</h3>
      <p>1. ...handing down props to a component?</p>
      <Checkbox label='Not at all' />
      <Checkbox label={"I think I can do it but it doesn't always work"} />
      <Checkbox label='Yes, I have done it successfully a few times.' />
      <Checkbox label='Yeah, easy peasy.' />
      <p>2. ...lifting state up to a higher component?</p>
      <Checkbox label='Not at all' />
      <Checkbox label={"I think I can do it but it doesn't always work"} />
      <Checkbox label='Yes, I have done it successfully a few times.' />
      <Checkbox label='Yeah, easy peasy.' />
      <p>3. ...using and modifying state?</p>
      <Checkbox label='Not at all' />
      <Checkbox label={"I think I can do it but it doesn't always work"} />
      <Checkbox label='Yes, I have done it successfully a few times.' />
      <Checkbox label='Yeah, easy peasy.' />
      <p>4. ...using useEffect and similar hooks?</p>
      <Checkbox label='Not at all' />
      <Checkbox label={"I think I can do it but it doesn't always work"} />
      <Checkbox label='Yes, I have done it successfully a few times.' />
      <Checkbox label='Yeah, easy peasy.' />
      <p>5. ...creating a custom React hook?</p>
      <Checkbox label='Not at all' />
      <Checkbox label={"I think I can do it but it doesn't always work"} />
      <Checkbox label='Yes, I have done it successfully a few times.' />
      <Checkbox label='Yeah, easy peasy.' />
    </div>
  );
}
