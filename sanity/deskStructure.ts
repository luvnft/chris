import { CogIcon } from '@sanity/icons'
import { HomeIcon } from '@sanity/icons'

export const myStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').documentId('settings')),
      S.divider(),
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(S.document().schemaType('home').documentId('home')),
      ...S.documentTypeListItems().filter(
        (listItem: any) => 'now' === listItem.getId()
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          !['settings', 'home', 'now', 'media.tag'].includes(listItem.getId())
      ),
    ])
