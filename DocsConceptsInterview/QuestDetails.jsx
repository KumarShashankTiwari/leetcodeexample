import React, { Component } from "react";
import { Input } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { faStickyNote, faPaperclip }  from "@fortawesome/free-solid-svg-icons";

class QuestDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className = "padding">
{/* hreader */}
        <div className="headerQuest">
        My Quest:QuestName
        </div>

          <div className="middle">
          <div class="row">
           
      
{/* first col starts */}
          <div class="column">
          <Card >
          <CardContent>
          <Typography color="textSecondary" gutterBottom>
          <h4 className="boxhead">On Boarding task 1</h4>
          <p className="cardp">Lorem simple is simple dummy text are used here</p>
          {/* </Typography> */}

          <div className="total">
          TOTAL DURATION : 50 MINUTES
          </div>
          <div>
          <TextField
          id="standard-helperText"
          label="Action, Words"
          defaultValue="Default Value"/>
          </div>
          <div><TextField id="standard-helperTextone" label="Subject" defaultValue="Advance Java"  />
          </div>
          
          {/* <Typography color="textSecondary" gutterBottom> */}
          <div classNmae="cp">
          <p className="cardp"><FontAwesomeIcon icon={faPaperclip} />Attachements <span className="sendspanright">ex 202020 file info</span></p>
          <p className="cardp"><FontAwesomeIcon icon={faStickyNote} /> Notes <span className="sendspanright"> ex 202020 file info</span></p>
          </div>
          </Typography>
          </CardContent>
          </Card>
          <div className="bdiv center">
          <Button className="bluebackground" variant="primary">START</Button>
          <Button className="whitebackground" variant="primary">CANCEL</Button>
        
          </div>
          </div>
{/* first col ends */}

{/* second col starts */}
<div class="column">
          <Card >
          <CardContent>
          <Typography color="textSecondary" gutterBottom>
          <h4 className="boxhead">On Boarding task 1</h4>
          <p className="cardp">Lorem simple is simple dummy text are used here</p>
          {/* </Typography> */}

          <div className="total">
          TOTAL DURATION : 50 MINUTES
          </div>
          <div>
          <TextField
          id="standard-helperText"
          label="Action, Words"
          defaultValue="Default Value"/>
          </div>
          <div><TextField id="standard-helperTextone" label="Subject" defaultValue="Advance Java"  />
          </div>
          
          {/* <Typography color="textSecondary" gutterBottom> */}
          <div classNmae="cp">
          <p className="cardp"><FontAwesomeIcon icon={faPaperclip} />Attachements <span className="sendspanright">ex 202020 file info</span></p>
          <p className="cardp"><FontAwesomeIcon icon={faStickyNote} /> Notes <span className="sendspanright"> ex 202020 file info</span></p>
          </div>
          </Typography>
          </CardContent>
          </Card>
          <div className="bdiv center">
          <Button className="bluebackground" variant="primary">START</Button>
          <Button className="whitebackground" variant="primary">CANCEL</Button>
        
          </div>
          </div>
{/* second col ends */}



{/* third col starts */}
<div class="column">
          <Card >
          <CardContent>
          <Typography color="textSecondary" gutterBottom>
          <h4 className="boxhead">On Boarding task 1</h4>
          <p className="cardp">Lorem simple is simple dummy text are used here</p>
          {/* </Typography> */}

          <div className="total">
          TOTAL DURATION : 50 MINUTES
          </div>
          <div>
          <TextField
          id="standard-helperText"
          label="Action, Words"
          defaultValue="Default Value"/>
          </div>
          <div><TextField id="standard-helperTextone" label="Subject" defaultValue="Advance Java"  />
          </div>
          
          {/* <Typography color="textSecondary" gutterBottom> */}
          <div classNmae="cp">
          <p className="cardp"><FontAwesomeIcon icon={faPaperclip} />Attachements <span className="sendspanright">ex 202020 file info</span></p>
          <p className="cardp"><FontAwesomeIcon icon={faStickyNote} /> Notes <span className="sendspanright"> ex 202020 file info</span></p>
          </div>
          </Typography>
          </CardContent>
          </Card>
          <div className="bdiv center">
          <Button className="bluebackground" variant="primary">START</Button>
          <Button className="whitebackground" variant="primary">CANCEL</Button>
        
          </div>
          </div>
          {/* third col ends */}





















        </div>
        </div>
      </div>
    );
  }
}

export default QuestDetails;
