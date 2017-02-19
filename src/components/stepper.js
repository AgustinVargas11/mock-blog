import React, { Component } from 'react';
import { Step, Stepper, StepButton } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { theme } from '../utils/styleMaker';
import PostForm from '../components/postNew/postNew';

/**
 * Non-linear steppers allow users to enter a multi-step flow at any point.
 *
 * This example is similar to the regular horizontal stepper, except steps are no longer
 * automatically set to `disabled={true}` based on the `activeStep` prop.
 *
 * We've used the `<StepButton>` here to demonstrate clickable step labels.
 */
class SubmissionSteps extends Component {

    state = {
        stepIndex: 0,
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        if (stepIndex < 2) {
            this.setState({ stepIndex: stepIndex + 1 });
        }
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        Bring your article to life!
                        <PostForm/>
                    </div>
                );
            case 1:
                return 'Choose a header image';
            case 2:
                return 'This is it, there\'s no turning back';
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    render() {
        const { stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };

        return (
            <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                <Stepper linear={false} activeStep={stepIndex}>
                    <Step>
                        <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                            Article Content
                        </StepButton>
                    </Step>
                    <Step>
                        <StepButton onClick={() => this.setState({ stepIndex: 1 })} disabled={stepIndex < 1}>
                            Choose An Image
                        </StepButton>
                    </Step>
                    <Step>
                        <StepButton onClick={() => this.setState({ stepIndex: 2 })} disabled={stepIndex < 2}>
                            Final Submission
                        </StepButton>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    <p>{this.getStepContent(stepIndex)}</p>
                    <div style={{ marginTop: 12 }}>
                        <FlatButton
                            label="Back"
                            disabled={stepIndex === 0}
                            onTouchTap={this.handlePrev}
                            style={{ marginRight: 12 }}
                        />
                        <RaisedButton
                            label="Next"
                            disabled={stepIndex === 2}
                            primary={true}
                            onTouchTap={this.handleNext}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default SubmissionSteps;
