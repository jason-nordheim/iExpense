

export const FormError = ({ errorMessage }) => {
    return <div style={{ display: 'flex' }}>
        <span className="red-text" style={{ textTransform: 'capitalize' }}>{errorMessage}</span>
    </div>;
};