import { mdiChartAreasplineVariant } from '@mdi/js';
import Icon from '@mdi/react';
import Alert from 'react-bootstrap/Alert';

const ClientTotalInvoicesValue = () => {

    return (

        <Alert variant="secondary">
            <div className="sum-container-element">
                <Alert.Heading>Total value</Alert.Heading>
                <p>
                    49000
                </p>
            </div>
            <Icon path={mdiChartAreasplineVariant}
                size={2}
                color="gray"
            />
        </Alert>

    );
}

export default ClientTotalInvoicesValue;