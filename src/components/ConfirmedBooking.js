import { useNavigate } from 'react-router-dom';

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your reservation. We look forward to serving you.</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </main>
  );
};

export default ConfirmedBooking;