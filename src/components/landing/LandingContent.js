import Button from 'components/ui/Button';
import ContentContainer from 'components/ui/ContentContainer';
import {Link} from 'gatsby';
import React from 'react';
import {connect} from 'react-redux';
import {getSurveyInfo} from 'store/selectors';
import {routes} from 'enums';

function LandingContent({surveyInfo}) {
  return (
    <ContentContainer>
      <div>{surveyInfo.info}</div>
      <Link to={routes.SURVEY}>
        <Button label="Begin Survey" />
      </Link>
    </ContentContainer>
  );
}

export default connect(state => ({
  surveyInfo: getSurveyInfo(state),
}))(LandingContent);