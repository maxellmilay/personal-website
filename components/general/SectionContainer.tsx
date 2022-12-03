import { styled } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface StyledSectionContainerPropsInterface {
    color: string
}

interface SectionContainerPropsInterface {
    children: ReactNode
    title: string
}

export const StyledSectionContainer = styled(Grid, { shouldForwardProp: (prop) => prop !== 'color' })<StyledSectionContainerPropsInterface>(({ color, theme }) => ({
    width: '100%',
    minHeight: '100vh',
    backgroundColor: color,
}))

export default function SectionContainer({ children, title }: SectionContainerPropsInterface) {
    return (
        <StyledSectionContainer container item direction="column" color="#FEFCF3">
            <Grid container item justifyContent='center'>
                <Typography variant="h4" sx={{ marginTop: '2rem', textAlign: 'center' }}>{title}</Typography>
            </Grid>
            {children}
        </StyledSectionContainer>
    )
}

