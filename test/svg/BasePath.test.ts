import { Color, Project } from "paper/dist/paper-core";
import { expect } from "chai";
import BasePath from "~/svg/BasePath";

describe("BasePath", () => {
  let path;
  let tempProject: paper.Project;

  beforeEach(() => {
    tempProject = new Project("");
    path = new BasePath();
  });

  afterEach(() => {
    tempProject.remove();
  });

  describe("#stylesheet", () => {
    beforeEach(() => {
      const stylesheet = {
        base: {
          strokeWidth: 4,
          fillColor: new Color("blue"),
        },
        picked: {
          strokeWidth: 3,
          fillColor: new Color("purple"),
        },
        excluded: {
          strokeWidth: 2,
          fillColor: new Color("gray"),
        },
        error: {
          strokeWidth: 5,
          fillColor: new Color("red"),
        },
      };
      path.stylesheet = stylesheet;
    });

    context("picked", () => {
      beforeEach(() => {
        path.picked = true;
      });

      it("should set stroke width of stylesheet", () => {
        expect(path.strokeWidth).to.equal(3);
      });

      it("should set fill color of stylesheet", () => {
        expect(path.fillColor.toString()).to.equal(
          new Color("purple").toString()
        );
      });
    });

  });
});
