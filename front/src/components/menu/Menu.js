import React from 'react';

import Card from '../common/Card';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import NightsStayIcon from '@material-ui/icons/NightsStay';
import SettingsIcon from '@material-ui/icons/Settings';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import TextFieldsIcon from '@material-ui/icons/TextFields';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    padding: theme.spacing(0),
    paddingLeft: theme.spacing(4),
  },
}));

const Menu = ({ history }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Card big>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem
          button
          onClick={() => {
            history.push('/search/keyword');
          }}
        >
          <ListItemIcon>
            <TextFieldsIcon />
          </ListItemIcon>
          <ListItemText
            primary="키워드로 검색"
            secondary="게임물명, 신청자 키워드를 통해 검색합니다."
          />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            history.push('/search/date');
          }}
        >
          <ListItemIcon>
            <EventAvailableIcon />
          </ListItemIcon>
          <ListItemText
            primary="날짜로 검색"
            secondary="심의가 진행된 날짜를 입력하여 검색합니다."
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <NightsStayIcon />
          </ListItemIcon>
          <ListItemText
            primary="다크 모드"
            secondary="다크 모드를 설정합니다."
          />
          <Switch size="small" inputProps={{ 'aria-label': 'dark mode' }} />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            primary="검색 설정"
            secondary="검색과 관련된 옵션이 들어 있습니다."
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <FormControlLabel
                control={<Checkbox />}
                label="심의 거부된 게임물을 표시"
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <FormControlLabel
                control={<Checkbox />}
                label="심의 취소된 게임물을 표시"
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Card>
  );
};

export default Menu;
