import { ButtonNextPage } from '../button-next-page/button.next.page';
import { ButtonPreviewPage } from '../button-preview-page/button.preview.page';
import './actions.list.scss';

export function ActionsList() {
  return (
    <section className="action-list" role="contentinfo">
      <ButtonPreviewPage></ButtonPreviewPage>
      <ButtonNextPage></ButtonNextPage>
    </section>
  );
}
