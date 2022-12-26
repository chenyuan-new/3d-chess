/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 -t public/knight.gltf
*/

import type { FC } from 'react'
import React from 'react'

import { useGLTF } from '@react-three/drei'
import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'

import type { ModelProps } from '.'
import { MeshWrapper, PieceMaterial } from '.'

type GLTFResult = GLTF & {
  nodes: {
    Object001005: THREE.Mesh
  }
  materials: {
    [`Object001_mtl.003`]: THREE.MeshStandardMaterial
  }
}

export const KnightComponent: FC<ModelProps> = ({
  movingTo,
  finishMovingPiece,
  newTileHeight,
  isSelected,
  ...props
}) => {
  const { nodes } = useGLTF(`/knight.gltf`) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <MeshWrapper
        geometry={nodes.Object001005.geometry}
        movingTo={movingTo}
        finishMovingPiece={finishMovingPiece}
        newTileHeight={newTileHeight}
        isSelected={isSelected}
      >
        <PieceMaterial color={props.color} isSelected={isSelected} />
      </MeshWrapper>
    </group>
  )
}

useGLTF.preload(`/knight.gltf`)
