import React from 'react';
import { Badge as MuiBadge, styled } from '@mui/material';

const NumberBadge = styled(MuiBadge)(({ theme, backgroundColor, color }) => ({
  '& .MuiBadge-badge': {
    borderRadius: '50%',
    minWidth: 'unset',
    width: '24px', 
    height: '24px',
    right: '0',
    top: '0',
    padding: "2px 5px",
    fontWeight: "700",
    color: color,
    backgroundColor: backgroundColor,
  },
}));

const Badge = ({ color, badgeContent, backgroundColor, variant }) => {
  return (
    <NumberBadge color={color} badgeContent={badgeContent} variant={variant} backgroundColor={backgroundColor}>
    </NumberBadge>
  );
};

export default Badge;
