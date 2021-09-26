import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { pages } from './routes';

interface ListItemLinkProps {
  primary: string;
  to: string;
  icon?: React.ReactElement;
}

function ListItemLink(props: ListItemLinkProps) {
  const { primary, to, icon = undefined } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function ForwardingRouterLink(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} />;
      }),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const LeftMenu: React.FC = () => (
  <List>
    {pages.map((p) => {
      const Icon = p.icon;
      return <ListItemLink key={p.page} to={p.page} icon={<Icon />} primary={p.label} />;
    })}
  </List>
);

export default LeftMenu;
