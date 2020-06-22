import * as EntityConstants from "../../constants/entity";
import merge from "lodash/fp/merge";


const initialState = {
    restaurants: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
  case EntityConstants.MERGE_ENTITY:
    return mergeEntity(state, action.entityName, action.key, action.entity);
  case EntityConstants.MERGE_ENTITIES:
    return mergeEntities(state, action.entities);
  case EntityConstants.SYNC_ENTITIES:
    return syncEntities(state, action.entity, action.key, action.idAttribute);
  case EntityConstants.SYNC_ARRAY_ENTITIES:
    return syncArrayEntities(state, action.entity, action.key);
  case EntityConstants.DELETE_ENTITY:
    return deleteEntity(state, action.entityId, action.entityName);
  case EntityConstants.ADD_ENTITY_PERMISSION:
    return addEntityPermission(state, action.roleId, action.entityPermissionId);
  }
  return state;
}

function mergeEntity(state, entityName, key, entity) {
  return {
    ...state,
    [entityName]: {
      ...state[entityName],
      [key]: entity
    }
  };
}

function mergeEntities(state, entities) {
  return merge(state, entities);
}

function syncEntities(state, entity, key, idAttribute) {
  const idName = idAttribute || "id";
  return { ...state, [key]: { ...state[key], [entity[idName]]: entity } };
}

function syncArrayEntities(state, entity, key) {
  return { ...state, [key]: entity };
}

function deleteEntity(state, entityId, entityName) {
  const entities = state[entityName];
  delete entities[entityId];
  return {
    ...state,
    [entityName]: {
      ...entities
    }  
  };
}

function addEntityPermission(state, roleId, entityPermissionId) {
  const entities = state["roles"];
  const role = entities[roleId];
  const entityPermissions = [
    ...role.entityPermissions
  ];
  entityPermissions.push(entityPermissionId);
  return {
    ...state,
    roles: {
      ...entities,
      [roleId]: {
        ...role,
        entityPermissions
      }
    }
  };
}