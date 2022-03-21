import github from "../Asserts/images/github.png";
import linkedin1 from "../Asserts/images/linkedin1.png"
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image:
    {
        width: '50%',
        height: '50%'

    },
    component:
    {
        margin: 50
    }
})
const Crudoperationbymounika = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            <Typography variant="h4" style={{ marginBottom: 50 }} >GitHub & LinkedIn</Typography>
            <Box style={{ display: 'flex' }}>
                <img className={classes.image} src={github} />
                <img className={classes.image} src={linkedin1} />
            </Box>
        </Box>
    )
}
export default Crudoperationbymounika;