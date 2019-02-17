import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getarticle';

/**
 * @action Get Diffbot Article from Web Page
 * @section Content Types > Web > Articles
 * @icon DownloadArticle
 *
 * Gets article details, including body text, author, publish date, and more, from every URL passed into the action.
 *
 * ```js
 * getDiffbotArticleFromWebPage();
 * ```
 */
const getDiffbotArticleFromWebPage = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getDiffbotArticleFromWebPage.identifier = identifier;
getDiffbotArticleFromWebPage.invert = invert;

export default withActionOutput(getDiffbotArticleFromWebPage);
