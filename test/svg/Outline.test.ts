import Outline from '~/svg/Outline';
import { expect } from 'chai';
import { Project } from 'paper/dist/paper-core';

describe('Outline', () => {
  describe('#constructor', () => {
    let tempProject: paper.Project;
    let outline: Outline;

    beforeEach(() => {
      tempProject = new Project("");
      outline = new Outline();
    });

    afterEach(() => {
      tempProject.remove();
    });

    it('should have type of Outline', () => {
      // expect(outline.type).to.equal('Outline');
    });
  });
});
