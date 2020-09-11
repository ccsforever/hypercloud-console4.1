import * as React from 'react';
import * as _ from 'lodash-es';
import { FaMinus } from 'react-icons/fa';
import { Button } from './button';
import * as classNames from 'classnames';
import { ValueEditorPair } from './index';

export class ValueEditor extends React.Component {
  constructor(props) {
    super(props);
    this._append = this._append.bind(this);
    this._change = this._change.bind(this);
    this._remove = this._remove.bind(this);
  }
  _append(event) {
    const { updateParentData, values, nameValueId, allowSorting, editorIdx } = this.props;
    let lastIndex = this.props.values.length - 1;
    let lastData = this.props.values[lastIndex];
    updateParentData({ values: allowSorting ? portPairs.concat([['', values.length]]) : values.concat([['']]), editorIdx }, nameValueId);
  }

  _remove(i) {
    const { updateParentData, nameValueId, editorIdx } = this.props;
    const values = _.cloneDeep(this.props.values);
    values.splice(i, 1);
    updateParentData({ values: values.length ? values : [['', '']], editorIdx }, nameValueId);
  }

  _change(e, i, type) {
    const { updateParentData, nameValueId, editorIdx } = this.props;
    const values = _.cloneDeep(this.props.values);
    values[i][type] = e.target.value;
    updateParentData({ values, editorIdx }, nameValueId);
  }
  render() {
    const { desc, title, valueString = '', addString, values, allowSorting, readOnly, nameValueId, isModal, t } = this.props;
    const portItems = values.map((pair, i) => {
      const key = _.get(pair, [ValueEditorPair.Index], i);
      return <ValuePairElement onChange={this._change} index={i} t={t} valueString={valueString} isModal={isModal} allowSorting={allowSorting} readOnly={readOnly} pair={pair} key={key} onRemove={this._remove} rowSourceId={nameValueId} />;
    });
    return (
      <React.Fragment>
        <div className="row">{title !== 'false' && <div className="col-md-2 col-xs-2 text-secondary">{t(`CONTENT:${valueString.toUpperCase()}`)}</div>}</div>
        {portItems}
        <span>{desc}</span>
        <div className="row">
          <div className="col-md-12 col-xs-12">
            {readOnly ? null : (
              <React.Fragment>
                <span className="btn-link pairs-list__btn" onClick={this._append}>
                  <i aria-hidden="true" className="fa fa-plus-circle pairs-list__add-icon" />
                  {t(`CONTENT:${addString.toUpperCase()}`)}
                </span>
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
ValueEditor.defaultProps = {
  valueString: 'Value',
  addString: 'AddMore',
  allowSorting: false,
  readOnly: false,
  nameValueId: 0,
};

class ValuePairElement extends React.Component {
  constructor(props) {
    super(props);
    this._onRemove = this._onRemove.bind(this);
    this._onChangeValue = this._onChangeValue.bind(this);
  }
  _onRemove(e) {
    const { index, onRemove } = this.props;
    event.preventDefault();
    onRemove(index);
  }
  _onChangeValue(e) {
    const { index, onChange } = this.props;
    onChange(e, index, ValueEditorPair.Value);
  }
  render() {
    const { keyString, valueString, allowSorting, readOnly, pair, t, isModal = false } = this.props;
    const deleteButton = (
      <React.Fragment>
        <Button children={<FaMinus />} onClick={this._onRemove}></Button>
        <span className="sr-only">Delete</span>
      </React.Fragment>
    );

    return (
      <div className={classNames('row')} ref={node => (this.node = node)}>
        <div className={classNames(isModal ? 'col-md-10 col-xs-10 pairs-list__protocol-field' : 'col-md-4 col-xs-4 pairs-list__protocol-field')}>
          {/* <div className="col-md-4 col-xs-4 pairs-list__protocol-field"> */}
          <input type="text" className="form-control" placeholder={t(`CONTENT:${valueString.toUpperCase()}`)} value={pair[ValueEditorPair.Value] || ''} onChange={this._onChangeValue} />
        </div>
        {readOnly ? null : (
          <div className="col-md-2 col-xs-2">
            <span className={classNames(allowSorting ? 'pairs-list__span-btns' : null)}>{allowSorting ? <React.Fragment>{deleteButton}</React.Fragment> : deleteButton}</span>
          </div>
        )}
      </div>
    );
  }
}
