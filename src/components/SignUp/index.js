import React from 'react';
import { validations, validateAll } from 'indicative/validator';
import Axios from 'axios';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: []
    };
   

  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    // validating user data
    const data = this.state;
    const rules = {
      name: 'required|string',
      email: 'required|email',
      // password: 'required|string|min:6|confirmed'
      password: [
        validations.required(),
        validations.confirmed(),
        validations.regex([/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/]),
      ]
    };

    const messages = {
      required: '필수값 입니다.',
      'password.regex': '비밀번호는 최소 6자, 하나의 문자, 하나의 숫자, 하나의 특수 문자로 이루어져야 합니다.',
      'password.confirmed': '비밀번호가 맞지 않습니다.',
      'email.email': '이메일 형식으로 작성해 주세요.'
    }
    validateAll(data, rules, messages)
    .then(() => {
      //successfull login
      Axios.post(`urlsample/`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }).then(response => {
        console.log(response)
      }).catch(errors => {
        console.log(errors);
      })
    })
    .catch(errors => {
      console.log(errors);
      const formattedErrors = {}
      errors.forEach(error => formattedErrors[error.field] = error.message)
      this.setState({
        errors: formattedErrors
      })
    })
  }
  render() {
    return (
      <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-girl.jpg)`}}>
    <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
    <h5 className="text-uppercase text-center">Register</h5>
    <br />
    <br />
    <form className="form-type-material" onSubmit={this.handleSubmit}>
    <div className="form-group">
      <input type="text" className="form-control" name="name" placeholder="Username" onChange={this.handleInputChange}/>
      {
        this.state.errors['name'] &&
        <small className="text-danger">{this.state.errors['name']}</small>
      }
    </div>
    <div className="form-group">
      <input type="text" className="form-control" name="email" placeholder="Email address" onChange={this.handleInputChange}/>
      {
        this.state.errors['email'] &&
        <small className="text-danger">{this.state.errors['email']}</small>
      }
    </div>
    <div className="form-group">
      <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleInputChange}/>
      {
        this.state.errors['password'] &&
        <small className="text-danger">{this.state.errors['password']}</small>
      }
    </div>
    <div className="form-group">
      <input type="password" className="form-control" name="password_confirmation" placeholder="Password (confirm)" onChange={this.handleInputChange}/>
    </div>
    <br />
    <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
    </form>
    <hr className="w-30" />
    <p className="text-center text-muted fs-13 mt-20">Already have an account?
    <a href="login.html">Sign in</a>
    </p>
    </div>
</div>
    )
  }
}

export default SignUp;