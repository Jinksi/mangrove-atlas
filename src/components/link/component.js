import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { jsonToCSV } from 'utils/jsonParsers';
import { CSVLink } from 'react-csv';
import ArrowDown from './arrow-down.svg';
import styles from './styles.module.scss';

class DownloadLink extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})),
    slug: PropTypes.string
  }

  static defaultProps = {
    data: null,
    slug: null
  }

  render() {
    const { data, slug } = this.props;
    const csvData = jsonToCSV(data);
    return (
      <CSVLink
        className={styles.link}
        data={csvData}
        filename={`${slug}-${Date.now()}}.csv`}
      >
        <img src={ArrowDown} className={styles.icon} alt="info-icon" />
        Download data
      </CSVLink>
    );
  }
}

export default DownloadLink;
