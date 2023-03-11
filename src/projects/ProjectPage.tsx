import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../state';
import ProjectDetail from './ProjectDetail';
import { loadProjects } from './state/projectActions';
import { ProjectState } from './state/projectTypes';

function ProjectPage(props: any) {
  const params = useParams();
  const id = Number(params.id);
  const loading = useSelector(
    (appState: AppState) => appState.projectState.loading
  );
  const project = useSelector(
    (appState: AppState) => appState.projectState.projects[id]
  );
  const error = useSelector(
    (appState: AppState) => appState.projectState.error
  );
  const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

  useEffect(() => {
    dispatch(loadProjects(1));
  }, [dispatch]);

  return (
    <div>
      <>
        <h1>Project Detail</h1>

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse"></span>{error}
                </p>
              </section>
            </div>
          </div>
        )}

        {project && <ProjectDetail project={project}/>}
      </>
    </div>
  );
}

export default ProjectPage;