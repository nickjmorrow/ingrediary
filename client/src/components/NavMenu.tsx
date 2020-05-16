import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navMenuRoutes } from '~/core/componentRoutes';
import { SiteTitle } from '~/core/SiteTitle';
import { Typography } from '~/core/Typography';

export const NavMenu: React.FC = () => {
    return (
        <Container>
            <SiteTitleContainer>
                <SiteTitle />
            </SiteTitleContainer>
            <NavItemsContainer>
                {navMenuRoutes
                    .filter(cr => cr.showInNav)
                    .map(cr => (
                        <Link to={`/${cr.route}`} style={{ textDecoration: 'none' }}>
                            <NavItem>
                                <Typography>{cr.label}</Typography>
                            </NavItem>
                        </Link>
                    ))}
            </NavItemsContainer>
        </Container>
    );
};

const SiteTitleContainer = styled.div`
    margin-left: ${p => p.theme.spacing.ss4};
    display: flex;
    align-items: center;
`;

const Container = styled.div`
    border: 1px solid blue;
    height: ${p => p.theme.spacing.ss16};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const NavItem = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
