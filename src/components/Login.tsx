import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

// tslint:disable-next-line:interface-over-type-literal
type Props = {
    classes: any;
    login: (usuario: any) => void
}

// tslint:disable-next-line:interface-name
export interface State{
    email: string,
    password: string,
}

const styles = {
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    card: {
        margin: '1em auto',
        width: 275,
    },
    pos: {
        marginBottom: 12,
    },
    title: {
        fontSize: 14,
        marginBottom: 16,
    },
  };

class Login extends React.Component<Props, State> {
    constructor(props){
        super(props);
        this.state = { email: 'a@a.c', password: ''};
    }

    public render() {
        const { classes } = this.props;

        return (
            <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Ingresar
          </Typography>
          <form className={classes.container} onSubmit={this.handleSubmit}>
            <TextField
                id="email"
                label="Email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange}
                margin="normal"
                type="email"
            />

            <TextField
                id="password"
                label="Contraseña"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleChange}
                margin="normal"
            />

            <Button variant="contained" color="primary" 
                className={classes.button} type="submit"
                disabled={!this.validateForm()}>
                Ingresar
            </Button>

          </form>
        </CardContent>
        <CardActions>
          <Button size="small">Reestablecer Contraseña</Button>
        </CardActions>
      </Card>
    </div>
        );
    }

    private validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    private handleSubmit = (event) =>{
        event.preventDefault();
        this.props.login(this.state);
    }

    private handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        } as State);
      }
}

export default withStyles(styles)(Login);