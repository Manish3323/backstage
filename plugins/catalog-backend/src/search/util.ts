/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Entity, UserEntity } from '@backstage/catalog-model';

function isUserEntity(entity: Entity): entity is UserEntity {
  return entity.kind.toLocaleUpperCase('en-US') === 'USER';
}

export function getDocumentText(entity: Entity): string {
  let documentText = entity.metadata.description || '';
  if (isUserEntity(entity)) {
    if (entity.spec?.profile?.displayName && documentText) {
      // combine displayName and description
      const displayName = entity.spec.profile.displayName;
      documentText = displayName.concat(' : ', documentText);
    } else {
      documentText = entity.spec?.profile?.displayName || documentText;
    }
  }
  return documentText;
}
