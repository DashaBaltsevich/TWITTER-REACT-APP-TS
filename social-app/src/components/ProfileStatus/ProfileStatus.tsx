import React from 'react'

type PropsType = {
  status: string
  updateStatusThunkCreator: (newStatus: string) => void
}

export class ProfileStatus extends React.Component<PropsType> {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false })
    this.props.updateStatusThunkCreator(this.state.status)
  }

  onStatusChange = (event: any) => {
    this.setState({ status: event?.target.value })
  }

  componentDidUpdate(prevProps: Readonly<PropsType>): void {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <>
        {this.state.editMode ? (
          <textarea
            value={this.state.status}
            onBlur={this.deactivateEditMode}
            onChange={this.onStatusChange}
            style={{
              width: '100%',
              height: '52px'
            }}
          />
        ) : (
          <p onDoubleClick={this.activateEditMode} autoFocus={true}>
            {this.props.status || 'no status'}
          </p>
        )}
      </>
    )
  }
}
