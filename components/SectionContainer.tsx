import { styled } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import { ReactNode } from 'react'
import { StringLiteral } from 'typescript'

interface StyledSectionContainerPropsInterface {
    color: string
}

interface SectionContainerPropsInterface {
    children: ReactNode
    title: string
}

export const StyledSectionContainer = styled(Grid, { shouldForwardProp: (prop) => prop !== 'color' })<StyledSectionContainerPropsInterface>(({ color, theme }) => ({
    width: '100 %',
    height: '100vh',
    backgroundColor: color,
    margin: "0 2%"
}))

export default function SectionContainer({ children, title }: SectionContainerPropsInterface) {
    return (
        <StyledSectionContainer color="black">
            <Typography variant="h4" sx={{ marginTop: '2rem' }}>{title}</Typography>
            {children}
        </StyledSectionContainer>
    )
}

