import React from 'react';
import SessionCreationForm from '../../components/scrum-poker/SessionCreationForm';
import SessionJoinForm from '../../components/scrum-poker/SessionJoinForm';
import StoryManagement from '../../components/scrum-poker/StoryManagement';
import ParticipantList from '../../components/scrum-poker/ParticipantList';
import PointingOptions from '../../components/scrum-poker/PointingOptions';
import SessionControls from '../../components/scrum-poker/SessionControls';
import ErrorBoundary from '../../components/scrum-poker/ErrorBoundary';

const ScrumPoker = () => {
  return (
    <div>
      <h1>Scrum Poker Tool</h1>
      <ErrorBoundary>
        <SessionCreationForm />
        <SessionJoinForm />
        <StoryManagement />
        <ParticipantList />
        <PointingOptions />
        <SessionControls />
      </ErrorBoundary>
    </div>
  );
}

export default ScrumPoker;