import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Header } from 'semantic-ui-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log(`Passwords do not match!`);
    } else {
      /*
      const newUser = {
        name,
        email,
        password
      };

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        const body = JSON.stringify(newUser);

        const res = await axios.post('api/users', body, config);

        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
      */
      console.log('Successfully registered user');
    }
  };

  return (
    <Fragment>
      <Header as="h1">Sign Up</Header>
      <p>Create Your Account</p>
      <Form onSubmit={e => onSubmit(e)}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            minLength="6"
            value={confirmPassword}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
      <p>
        Already have an account?
        <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;
