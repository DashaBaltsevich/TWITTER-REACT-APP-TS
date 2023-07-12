import React, { useEffect, useState } from 'react'

export const ProfileStatus = ({
  stateStatus,
  updateStatus,
  isMyProfile
}: {
  stateStatus: string | null
  updateStatus: (status: string) => void
  isMyProfile: boolean
}) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState<string | null>('')

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    if (status !== stateStatus) {
      updateStatus(status ?? '')
    }
  }

  const onStatusChange = (event: any) => {
    setStatus(event?.target.value)
  }

  useEffect(() => {
    setStatus(stateStatus)
  }, [stateStatus])

  return (
    <>
      {isMyProfile ? (
        editMode ? (
          <textarea
            value={status || ''}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            style={{
              width: '100%',
              height: '52px'
            }}
          />
        ) : (
          <p onDoubleClick={activateEditMode} autoFocus={true}>
            {stateStatus || 'no status'}
          </p>
        )
      ) : (
        <p>{stateStatus || 'no status'}</p>
      )}
    </>
  )
}
