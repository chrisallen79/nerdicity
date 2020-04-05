import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Header } from 'semantic-ui-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('Successfully logged in.');
  };

  return (
    <Fragment>
      <Header as="h1">Sign In</Header>
      <p>Sign Into Your Account</p>
      <Form onSubmit={e => onSubmit(e)}>
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
        <Button type="submit" primary>
          Login
        </Button>
      </Form>
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
