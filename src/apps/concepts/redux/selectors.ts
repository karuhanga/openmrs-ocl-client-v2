import { errorListSelector, indexedAction, loadingSelector, progressSelector } from '../../../redux'
import {
  RETRIEVE_CONCEPT_ACTION,
  RETRIEVE_CONCEPTS_ACTION,
  UPSERT_CONCEPT_ACTION,
  UPSERT_CONCEPT_AND_MAPPINGS,
  UPSERT_MAPPING_ACTION
} from './actionTypes'
import { errorSelector } from '../../../redux/redux'

export const upsertConceptAndMappingsLoadingSelector = loadingSelector(
  indexedAction(UPSERT_CONCEPT_AND_MAPPINGS)
)
export const upsertConceptAndMappingsProgressSelector = progressSelector(
  indexedAction(UPSERT_CONCEPT_AND_MAPPINGS)
)
export const upsertConceptErrorsSelector = errorSelector(
  indexedAction(UPSERT_CONCEPT_ACTION)
)
export const viewConceptLoadingSelector = loadingSelector(
  indexedAction(RETRIEVE_CONCEPT_ACTION)
)
export const viewConceptErrorsSelector = errorSelector(
  indexedAction(RETRIEVE_CONCEPT_ACTION)
)
export const viewConceptsLoadingSelector = loadingSelector(
  indexedAction(RETRIEVE_CONCEPTS_ACTION)
)
export const viewConceptsErrorsSelector = errorSelector(
  indexedAction(RETRIEVE_CONCEPTS_ACTION)
)
export const upsertAllMappingsErrorSelector = errorListSelector(UPSERT_MAPPING_ACTION)