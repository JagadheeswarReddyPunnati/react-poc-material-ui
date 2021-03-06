import React, { Fragment } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from  "../../material-ui-components/Grid/GridItem.js";
import GridContainer from "../../material-ui-components/Grid/GridContainer.js";
import Card from "../../material-ui-components/Card/Card.js"
import CardHeader from "../../material-ui-components/Card/CardHeader.js";
import CardBody from "../../material-ui-components/Card/CardBody.js";

import styles from "../../assets/jss/material-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);

function UserGuide() {
  const classes = useStyles();
  return (
    <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="warning">
          <h4 className={classes.cardTitleWhite}>MaryLand StateStat</h4>
        </CardHeader>
        <CardBody>
          <h6>UserGuide Content </h6>
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
  );
}
export default UserGuide;
