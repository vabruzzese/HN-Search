import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

export const MediaCard = ({ story }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {story.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {story.author && (<strong>Author:</strong>)} {story.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {story.score && (<strong>Score:</strong>)} {story.score}
          </Typography>
        </CardContent>
      <CardActions>
        <Button className={classes.button} size="small" variant="contained">
          <a className={classes.link} href={story.url} target="_blank">Read More</a>
        </Button>
      </CardActions>
    </Card>
  );
}
